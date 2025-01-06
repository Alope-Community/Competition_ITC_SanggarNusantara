const strLimit = (str: string, limit: number) => {
    if (str.length > limit) {
        return str.substring(0, limit) + "...";
    }
    return str;
};

export default strLimit;
