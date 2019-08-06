import { Entity } from "./ddd";
import { Organization } from "./organization";
import { DescriptiveText } from "./common";


export interface Content extends Entity {
    language: string;
    title: DescriptiveText;
    description: DescriptiveText;
    image: string;
    readonly type: string;
    provider: Organization;
}