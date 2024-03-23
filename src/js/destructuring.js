export default function specialAttack(character) {
  const result = []; // создаем массив будущих объектов
  for (const elem of character.special) {
    // извлекаем из объекта необходимые ствойства,
    // если нет description, устанавливаем ему default значение 'Описание недоступно'
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
