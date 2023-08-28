import json
import pandas as pd

# Завантаження JSON
with open('./cleaned_data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)  # Завантажуємо JSON як список словників

# Створення DataFrame за допомогою pandas
df = pd.DataFrame(data)

# Сортуємо DataFrame за 'score' і видаляємо дублікати за номером телефону, залишаючи запис з найбільшим результатом
df = df.sort_values(by='score', ascending=False).drop_duplicates(subset='phone', keep='first')

# Виберемо потрібні стовпці і перейменуємо їх
df = df[['name', 'phone', 'score']]
df.columns = ["Ім'я", 'Телефон', 'Бал']

# Виводимо оновлену таблицю
print(df)

# Збереження таблиці у CSV форматі (якщо потрібно)
df.to_csv('output_table.csv', index=False)
