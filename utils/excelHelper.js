/*
----------------------------------------------------
excelHelper.js

Responsibilities:
1. Create Excel reports.
2. Store extracted jobs.
3. Store applied jobs.
4. Store manual apply jobs.
5. Store already applied jobs.

Libraries:
- XLSX
----------------------------------------------------
*/

const XLSX = require('xlsx');

function writeJobs(data, fileName) {
  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    'Jobs'
  );

  XLSX.writeFile(workbook, fileName);
}

module.exports = {
  writeJobs
};