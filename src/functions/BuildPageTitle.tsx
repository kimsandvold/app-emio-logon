import { title } from "..";

/**
 * 
 * @param subpageTitle 
 * @param splitter 
 * @returns string
 */
const BuildPageTitle = (subpageTitle: string, splitter = ' » '): string => {
    const rootTitle = title;
    return rootTitle.concat(splitter, subpageTitle);
}

export default BuildPageTitle;