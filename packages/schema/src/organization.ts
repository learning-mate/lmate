import { Entity } from "./ddd";

export interface Organization extends Entity {

}

export interface Person extends Entity {

}

export interface Membership extends Entity {
  person: Person;
  organization: Organization;
  since: Date;
}