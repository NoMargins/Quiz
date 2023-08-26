import json

data_list = []

# Читаємо файл
with open("out.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# Перебираємо кожний рядок у файлі
for line in lines:
    if "Data:" in line:
        # Вилучаємо частину, що містить JSON
        json_str = line.split("Data: ")[1].strip()

        # Виводимо строку перед спробою її обробити
        print(f"Attempting to parse: {json_str}")

        try:
            # Конвертуємо JSON-строку у об'єкт
            data_obj = json.loads(json_str)
            data_list.append(data_obj)
        except json.JSONDecodeError:
            print(f"Failed to parse: {json_str}")
            continue

# Видалення дублікатів за номером телефону і залишення запису з найбільшим score
unique_data = {}
for item in data_list:
    phone = item["phone"]
    if phone not in unique_data or unique_data[phone]["score"] < item["score"]:
        unique_data[phone] = item

# Збереження у JSON файл
with open("cleaned_data.json", "w", encoding="utf-8") as file:
    json.dump(list(unique_data.values()), file, ensure_ascii=False, indent=4)
