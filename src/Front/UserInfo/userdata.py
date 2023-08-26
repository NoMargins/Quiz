import json

# Крок 1: Прочитати вміст файлу
with open('path/to/your/file.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()

# Крок 2 та 3: Витягти дані і додати до масиву
data_list = []
for line in lines:
    if "Data: " in line:
        json_str = line.split("Data: ")[1].strip()
        data_obj = json.loads(json_str)
        data_list.append(data_obj)

# Крок 4: Зберегти в JSON
with open("output.json", "w") as json_file:
    json.dump(data_list, json_file, ensure_ascii=False, indent=4)

print("Дані збережено у форматі JSON!")