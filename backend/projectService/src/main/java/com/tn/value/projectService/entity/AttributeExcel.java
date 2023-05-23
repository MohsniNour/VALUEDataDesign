package com.tn.value.projectService.entity;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class AttributeExcel {
   private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    private List<TabAttribute> attributeList;

   public AttributeExcel(List<TabAttribute> attributeList) {
      this.attributeList = attributeList;
      workbook = new XSSFWorkbook();
   }

   private void writeHeaderLine(){
      sheet = workbook.createSheet("attributes");
      Row row = sheet.createRow(0);
      CellStyle style = workbook.createCellStyle();
      XSSFFont font = workbook.createFont();
      font.setBold(true);
      font.setFontHeight(16);
      style.setFont(font);
      createCell(row,0,"name",style);
      createCell(row,1,"description",style);
      createCell(row,2,"type",style);
      createCell(row,3,"lengthAttribute",style);
      createCell(row,4,"decimalAttribute",style);
      createCell(row,5,"requiredAttribute",style);
      createCell(row,6,"PKey",style);
      createCell(row,7,"FKey",style);
   }

   private void createCell(Row row , int columnCount, Object value, CellStyle style){
      sheet.autoSizeColumn(columnCount);
      Cell cell = row.createCell(columnCount);
      if (value instanceof Integer){
         cell.setCellValue((Integer) value);
      }else if (value instanceof Boolean){
         cell.setCellValue((Boolean) value);
      } else {
         cell.setCellValue((String) value);
      }
      cell.setCellStyle(style);
   }

   private void writeDataLines(){
      int rowCount = 1;
      CellStyle  style = workbook.createCellStyle();
      XSSFFont font = workbook.createFont();
      font.setFontHeight(14);
      style.setFont(font);

      for (TabAttribute att : attributeList){
         Row row = sheet.createRow(rowCount++);
         int columnCount = 0;
         createCell(row, columnCount++,att.getName(),style);
         createCell(row,columnCount++,att.getDescription(),style);
         createCell(row,columnCount++,att.getType(),style);
            createCell(row,columnCount++,att.getLengthAttribute(),style);
         createCell(row,columnCount++,att.getDecimalAttribute(),style);
         createCell(row,columnCount++,att.getRequiredAttribute(),style);
         createCell(row,columnCount++,att.getPKey(),style);
         createCell(row,columnCount++,att.getFKey(),style);
      }
   }

   public void export (HttpServletResponse response) throws IOException{
      writeHeaderLine();
      writeDataLines();
      ServletOutputStream outputStream = response.getOutputStream();
      workbook.write(outputStream);
      workbook.close();
      outputStream.close();
   }
}
