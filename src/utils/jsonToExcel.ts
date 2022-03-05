import XLSX from 'xlsx';
import { ICsvTable } from '../interfaces';

export const jsonToExcelConverter = async (data: ICsvTable[])=>{
    //create a work sheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    //create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'movieApp');
    //generate Buffer
    XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
    //binary string
    XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});
    XLSX.writeFile(workbook, 'movieData.xlsx');
}
