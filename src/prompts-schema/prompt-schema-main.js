import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.italic("Escolha a ferramenta desejada: (1- QrCode ou (2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas entre  1 ou 2"),
        required: true,
    },
];


export default promptSchemaMain;