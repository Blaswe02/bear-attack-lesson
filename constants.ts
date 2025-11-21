import { VocabWord, QuizQuestion, MatchingPair } from './types';

export const VOCABULARY_LIST: VocabWord[] = [
  { word: 'Attack', definition: 'When an animal or person tries to hurt someone.', icon: 'paw' },
  { word: 'Habitat', definition: 'The natural home of an animal or plant.', icon: 'tree' },
  { word: 'Species', definition: 'A group of similar animals or plants.', icon: 'dna' },
  { word: 'Climate Change', definition: "Long-term changes in Earth's weather patterns.", icon: 'thermometer' },
  { word: 'Hunters', definition: 'People who catch or kill wild animals.', icon: 'target' },
  { word: 'Rural Areas', definition: 'Countryside regions, not cities.', icon: 'sun' },
  { word: 'Surged', definition: 'Increased suddenly and powerfully.', icon: 'trend-up' },
  { word: 'Buffer Zone', definition: 'An area created to separate two things (like bears and humans).', icon: 'shield' },
];

export const TRUE_FALSE_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: "Japan's government said bears have killed 13 people this year (2025).", isTrue: true, explanation: "Correct. The Ministry of Environment reported 13 deaths." },
  { id: 2, question: "The number of fatalities is the highest for over 100 years.", isTrue: false, explanation: "False. It is the highest since records began in 2006." },
  { id: 3, question: "Wildlife experts have revised a plan to keep a check on bear injuries.", isTrue: false, explanation: "False. They devised a plan to reduce fatalities, injuries, and encounters." },
  { id: 4, question: "Authorities will create an area to keep bears away from housing areas.", isTrue: true, explanation: "Correct. This is called a 'buffer zone'." },
  { id: 5, question: "The number of black bears in Japan has risen three-fold since 2012.", isTrue: true, explanation: "Correct. Estimates suggest they tripled from 15,000 to 44,000." },
  { id: 6, question: "There are about 44,000 brown bears living on the island of Hokkaido.", isTrue: false, explanation: "False. The *black* bear population is 44,000. Brown bears have doubled, but the number isn't 44,000." },
  { id: 7, question: "The number of bear hunters in Japan is going down.", isTrue: true, explanation: "Correct. There is a declining number of licensed hunters." },
  { id: 8, question: "Bears are entering villages because of people leaving them.", isTrue: true, explanation: "Correct. Depopulation of rural areas means bears are venturing into towns." },
];

export const MATCHING_PAIRS: MatchingPair[] = [
  { id: '1', term: 'Measures', match: 'Actions' },
  { id: '2', term: 'Toll', match: 'Tally / Count' },
  { id: '3', term: 'Devised', match: 'Came up with' },
  { id: '4', term: 'Fatalities', match: 'Deaths' },
  { id: '5', term: 'Buffer', match: 'Cushion / Shield' },
  { id: '6', term: 'Surged', match: 'Escalated' },
];

export const READING_TEXT = `
Japan's government has created emergency measures to address record numbers of bear attacks. The Ministry of Environment reported that 13 people have been killed, and more than 100 have been injured by bears since April. The death toll is the highest since records began in 2006.

Wildlife management experts have devised a plan to reduce the increasing numbers of fatalities, injuries, and encounters with bears. Part of this plan is to reduce bear populations in areas where the animals have been sighted. Another feature is the establishment of region-specific capture targets. Authorities will also set up a buffer zone in many areas to try to separate bear habitats from human residential areas.

There are two species of bear in Japan and their numbers have surged in the past decade. Estimates suggest the Asian black bear population has roughly tripled since 2012 — rising from about 15,000 to around 44,000. The larger and more dangerous Ussuri brown bears, native to the northern island of Hokkaido, have doubled in number.

There are several reasons for the growth in bear populations. One is the shortage of beech nuts, which scientists attribute to climate change. Another reason is a declining number of licensed hunters, who were largely responsible for bear culls. Finally, a depopulation of rural areas means bears are venturing into towns and villages.
`;
