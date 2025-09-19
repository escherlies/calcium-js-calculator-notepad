// 🌿 Gin-Basil-Smash

const singleServing = {
  gin: { amount: 60, unit: 'ml' },
  lemonJuice: { amount: 30, unit: 'ml' },
  sugarSyrup: { amount: 15, unit: 'ml' }, // Essential for balance!
  basilLeaves: { amount: 12, unit: 'leaves' }
};


const createInstructions = (count) => {
  const shoppingList = Object.fromEntries(
    Object.entries(singleServing).map(([name, { amount, unit }]) => [
      name,
      { amount: amount * count, unit }
    ])
  );
  const ingredientsText = Object.entries(shoppingList)
    .map(([name, { amount, unit }]) => `  - ${String(amount).padEnd(3)} ${unit} of ${name}`)
    .join('\n');

  return `🍸 Gin-Basil Smash for ${count} guests!
------------------------------------
You will need:
${ingredientsText}
------------------------------------
Smash, shake with ice, and enjoy! 😋
`;
};

const instructions = createInstructions(2)

// Your last statement will appear in the box below
instructions