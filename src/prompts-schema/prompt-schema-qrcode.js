import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QrCode"),
    },
    {
        name:"type",
        description: chalk.yellow("Escolha o tipo de QrCode (1- Imagem ou (2- Via Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas entre  1 ou 2"),
        required: true,
    },
];

export default promptSchemaQRCode;