// import json from './parts_data.json'
// import * as fs from 'fs';
//
// const partsJson = json
// const newPartsMap = {}
// let partsJsonCount = 0
// for (const keyObject in partsJson) {
//   const partJson = partsJson[keyObject]
//   const partType = partJson[`type`]
//   const partID = keyObject
//   const clazz = partJson[`class`]
//   const partName = partJson[`originCard`][`cardName`]
//   const partValue = partJson[`originCard`][`partValue`]
//   const partStage = partJson[`originCard`][`partStage`]
//   const partSkin = partJson[`skin`] ? partJson[`skin`] : 0
//   let specialGenes = partJson[`originCard`][`specialGenes`]
//   const partMapID = `${clazz}_${partType}_${partValue}_${partSkin}_${partStage - 1}`
//
//   const hasPart = newPartsMap[partMapID]
//
//   if (hasPart) {
//     console.log(`${partName} | ${hasPart.name} | ${partID} | ${hasPart.id}`)
//   }
//
//   specialGenes = partID.includes('shiny') ? `${specialGenes}-shiny` : specialGenes
//
//   newPartsMap[partMapID] = {
//     id: partID,
//     name: partName,
//     clazz: clazz,
//     specialGenes: specialGenes,
//     partSkin: partSkin,
//   }
//   partsJsonCount++
// }
//
// writeToFile(`partsMap.json`, JSON.stringify(newPartsMap))
// console.log(`${partsJsonCount} | ${Object.keys(newPartsMap).length}`)
//
//
// function writeToFile(filename: string, data: any) {
//   fs.writeFile(filename, data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully Written to File.");
//     }
//   });
// }
//
// // console.log(partsJson)
// //
// // const bodyStruct = getAxieBodyStructure512(`0x280000000000010003c1e0f1861800000001019428a1450a0001001420a105080001001420a1050800010180200100080000011420a105080001000c20610308`)
// //
// // console.log(bodyStruct)
//
//
// //partValue número do gene
// //skin é special gene
// //partStage é o número do upgrade
