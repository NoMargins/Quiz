import pandas as pd

# Читання CSV файлу
df = pd.read_csv('output_table.csv', header=None, names=["Ім'я", 'Телефон', 'Бал'])

# Запис DataFrame в Excel файл
df.to_excel('output_file.xlsx', index=False, engine='openpyxl')
