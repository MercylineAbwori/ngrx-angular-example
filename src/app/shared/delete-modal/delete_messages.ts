export interface DeleteMessageInterface {
    title: string,
    message: string
}

export class DeleteMessages {

    static getItemDetails(itemKey: string = ''): DeleteMessageInterface{

        return {
            title: "Delete " + DeleteMessages.titlelize(itemKey),
            message: `Are you sure you want to delete this ${itemKey}?`
        };
    }

    static titlelize(str: string): string{

        return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
    }

}