import React from 'react';
import { 
    faPencilAlt,
    faCheck,
    faTrashAlt
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TableCard from '../../decoration/card/TableCard';
import TableToCsv from "../../../common/TableToCsv";

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.editHandler = this.editHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }

    getCartTableHeaders() {
        return [{
            title: "Item",
            mapper: "name"
        },{
            title: "Price",
            mapper: "price"
        },{
            title: "Quantity",
            mapper: "quantity"
        }]
    }

    getCartTableActions() {
        return [{
            icon: (<FontAwesomeIcon icon={faPencilAlt} />),
            altIcon: (<FontAwesomeIcon icon={faCheck} className="hidden" />),
            handler: this.editHandler
        },{
            icon: (<FontAwesomeIcon icon={faTrashAlt} />),
            handler: this.removeHandler
        }]
    }

    editHandler(event) {
        event.preventDefault();
        const table = document.getElementsByTagName("table")[0];
        const tableToCsv = new TableToCsv({
            fileName: "hoohaw",
            table: table,
            hiddenColumns: [3]
        });
        tableToCsv.downloadCsv();
        /*
        const row = this.getRow(event);
        const quantityColumn = row.children[2];
        if (quantityColumn.querySelector("input")) {
            this.props.modifyItemsHandler(this.getRowItem(row));
            this.render();
        } else {
            quantityColumn.innerHTML = `<input type="number" min="0" value="${quantityColumn.innerHTML}"></input>`;
        }
        const editAction = row.children[3].children[0];
        for (let child of editAction.children) {
            child.classList.toggle("hidden");
        }
        */
    }

    removeHandler(event) {
        event.preventDefault();
        const row = this.getRow(event);
        this.props.removeItemHandler(this.getRowItem(row));
        this.render();
    }

    getRow(event) {
        return event.currentTarget.parentNode.parentNode;
    }

    getRowItem(row) {
        return {
            name: row.children[0].innerHTML,
            price: parseInt(row.children[1].innerHTML),
            quantity: parseInt(row.children[2].querySelector("input") ? row.children[2].children[0].value : row.children[2].innerHTML)
        };
    }

    render() {
        return (
            <TableCard 
                title="Cart"
                headers={this.getCartTableHeaders()}
                items={this.props.getItems()}
                actions={this.getCartTableActions()}
                details={`Total: $${this.props.totalValue} CAD`}
            />
        );
    }
}