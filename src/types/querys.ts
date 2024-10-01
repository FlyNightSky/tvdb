// querys.ts

// Define the allowed values as constant tuples using 'as const'
export const Types = ['series', 'company', 'list', 'movie', 'person'] as const;
export const Status = [
  'Announced',
  'Completed',
  'Continuing',
  'Ended',
  'Filming / Post-Production',
  'Pre-Production',
  'Released',
  'Upcoming',
] as const;
export const Network = [
  'Channel 5',
  'France 2',
  'HBO Max',
  'Hallmark Channel',
  'Hulu',
  'Lifetime',
  'NHK',
  'Netflix',
  'Peacock',
  'Prime Video',
] as const;
export const Year = [
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
] as const;

// Create TypeScript types based on the constant values
export type Type = (typeof Types)[number];
export type StatusType = (typeof Status)[number];
export type NetworkType = (typeof Network)[number];
export type YearType = (typeof Year)[number];
