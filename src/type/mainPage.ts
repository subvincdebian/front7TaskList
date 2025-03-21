export type textComponentType = {
    id: number,
    title: string,
    desc: string,
    list: textComponentListElementType[];
}

export type textComponentListElementType = {
    id: number,
    first: string,
    text: string,
    link: string,
}