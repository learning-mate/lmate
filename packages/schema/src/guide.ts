import { Entity } from "./ddd";
import { Person } from "./organization";

export interface Guide extends Entity {
}

export interface GuideStructure extends Guide {
  [step: number]: Guide;
}

export interface ConditionalGuide extends Guide {
  on(condition: Specification): Guide;
}

export interface Specification {

}

export interface LearningObject extends GuideStructure {
}

export interface CourseStructure extends LearningObject {
}

export interface Engagement extends Entity {
  guide: Guide;
  person: Person;
  on: Date;
}