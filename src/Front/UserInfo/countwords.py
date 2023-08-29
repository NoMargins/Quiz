import openpyxl

def count_chars_in_non_blue_cells(filename):
    wb = openpyxl.load_workbook(filename)
    total_chars = 0

    for sheet in wb:
        for row in sheet.iter_rows():
            for cell in row:
                if cell.fill.start_color.index != "#c9daf8":  # Синій колір у форматі ARGB
                    if cell.value and isinstance(cell.value, str):
                        total_chars += len(cell.value)

    return total_chars

filename = "translate.xlsx"
print(count_chars_in_non_blue_cells(filename))