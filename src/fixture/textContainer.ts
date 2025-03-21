import { textComponentType } from "../type/mainPage";

export const textArray: textComponentType[] = [
    {
        id: 1,
        title: "React",
        desc: "React is a JavaScript library for building user interfaces.",
        list: [
            {
                id: 1,
                first: "Component-Based",
                text: "React components are reusable building blocks that can be composed together to build complex applications.",
                link: "/",
            },
            {
                id: 2,
                first: "Declarative",
                text: "React uses a declarative approach to defining UI, which makes it easier to understand and debug.",
                link: "/",
            },
            {
                id: 3,
                first: "Virtual DOM",
                text: "React uses a virtual DOM to efficiently update the UI without re-rendering the entire page.",
                link: "/",
            }
        ]
    },
    {
        id: 2,
        title: "React",
        desc: "Programmatic React features:",
        list: [
            {
                id: 1,
                first: "Hooks",
                text: "Use different React features from your components.",
                link: "/",
            },
            {
                id: 2,
                first: "Components",
                text: "Built-in components that you can use in your JSX.",
                link: "/",
            },
            {
                id: 3,
                first: "APIs",
                text: "APIs that are useful for defining components.",
                link: "/",
            },
            {
                id: 4,
                first: "Directives",
                text: "Provide instructions to bundlers compatible with React Server Components.",
                link: "/",
            },
            {
                id: 5,
                first: "Context API",
                text: "Manage state across multiple components without passing props down manually.",
                link: "/",
            },
            {
                id: 6,
                first: "Error Boundaries",
                text: "Catch and display errors in child components without crashing the entire application.",
                link: "/",
            }
        ]
    },
    {
        id: 3,
        title: "Legacy APIs",
        desc: "",
        list: [
            {
                id: 1,
                first: "Legacy APIs",
                text: "Exported from the react package, but not recommended for use in newly written code.",
                link: "/",
            },
        ]
    }
]