export class TableExportHelpers {

    static tableToCSV(name: string) {

        // Variable to store the final csv data
        var csv_data: any = [];

        // Get each row data
        var rows = document.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {

            // Get each column data
            var cols = rows[i].querySelectorAll('td p,th p');
            // var cols = rows[i].querySelectorAll('td p,th p');

            

            // Stores each csv row data
            var csvrow = [];
            for (var j = 0; j < cols.length; j++) {

                // If we have dates with commas, we replace the commas so that
                // they don't interfere wthe the process of csv creation
                let cleanDates = (cols[j].innerHTML).split(', ').join('-');

                // Get the text data of each cell
                // of a row and push it to csvrow
                csvrow.push(cleanDates);
            }

            // Combine each column value with comma
            csv_data.push(csvrow.join(","));
        }

        // Combine each row data with new line character
        csv_data = csv_data.join('\n');

        // Call this function to download csv file
        this.downloadCSVFile(csv_data, name);
    }

    static downloadCSVFile(csv_data, name: string) {

        // Create CSV file object and feed
        // our csv_data into it
        let CSVFile = new Blob([csv_data], {
            type: "text/csv"
        });

        // Create to temporary link to initiate
        // download process
        var temp_link = document.createElement('a');

        // Download csv file
        temp_link.download = `${name}.csv`;
        var url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;

        // This link should not be displayed
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);

        // Automatically click the link to
        // trigger download
        temp_link.click();
        document.body.removeChild(temp_link);
    }

    

}

