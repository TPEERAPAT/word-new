/* eslint-disable no-param-reassign */
// @ts-nocheck

import type { TagData } from '#types/Persona';

export function LibraryToTag(tagData: TagData) {
  const {
    Organizations,
    Payors,
    HealthPriorities,
    HealthConditions,
    ClinicalCaptures,
    VisitLocations,
    CustomPersonas,
  } = tagData;
  const tagArrays = [
    Organizations,
    Payors,
    HealthPriorities,
    HealthConditions,
    ClinicalCaptures,
    VisitLocations,
    CustomPersonas,
  ];
  const tagNames = [
    'Organization',
    'Payor',
    'HealthPriority',
    'HealthCondition',
    'ClinicalCapture',
    'VisitLocation',
    'CustomPersona',
  ];

  const tags: TagLibrary = tagArrays.reduce((result: any, tagArray, index) => {
    const tagName = tagNames[index];
    result[tagName] = tagArray.reduce((tagResult: any, tagObject: any) => {
      const { uuid, ...rest } = tagObject;
      tagResult[uuid] = { uuid, ...rest };
      return tagResult;
    }, {});
    return result;
  }, {});

  return tags;
}
