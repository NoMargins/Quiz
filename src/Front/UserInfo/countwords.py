import openpyxl
import re

def count_chars_in_non_blue_cells(filename):
    wb = openpyxl.load_workbook(filename)
    total_chars = 0

    # Регулярний вираз для визначення тексту українською
    ukr_pattern = re.compile(r"^[А-ЩЬЮЯҐЄІЇа-щьюяґєії\s]+$")

    for sheet in wb:
        for row in sheet.iter_rows():
            for cell in row:
                if cell.fill.start_color.index != "FFc9daf8":  # Синій колір у форматі ARGB
                    if cell.value and isinstance(cell.value, str):
                        if ukr_pattern.match(cell.value):
                            total_chars += len(cell.value)

    return total_chars

filename = "translate.xlsx"
print(count_chars_in_non_blue_cells(filename))
