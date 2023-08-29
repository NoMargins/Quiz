import openpyxl
import re

def remove_english_cells(filename):
    wb = openpyxl.load_workbook(filename)

    # Регулярний вираз для визначення тексту англійською
    eng_pattern = re.compile(r"^[A-Za-z\s]+$")

    for sheet in wb:
        for row in sheet.iter_rows():
            for cell in row:
                if cell.value and isinstance(cell.value, str):
                    if eng_pattern.match(cell.value):
                        cell.value = None  # видалення змісту комірки

    # Зберігаємо зміни назад в файл
    wb.save(filename)

filename = "translate.xlsx"
remove_english_cells(filename)
