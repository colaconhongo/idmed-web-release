import{bO as D,bJ as l,dp as M,cf as s,b8 as i,bL as o}from"./index.28c7e456.js";const c="SPECIFIC",b="MONTH",y="QUARTER",R="SEMESTER",f="ANNUAL";var g={determineStartEndDate(Y){switch(Y.periodType){case b:{const e=Y.period;Y.startDate=D([21,e,Y.year],"DD-MM-YYYY").subtract("1","months").format("YYYY-MM-DD"),Y.endDate=D([20,e,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case y:{switch(Y.period){case 1:{Y.startDate=D([21,12,Y.year],"DD-MM-YYYY").subtract("1","year").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,3,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case 2:{Y.startDate=D([21,3,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,6,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case 3:{Y.startDate=D([21,6,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,9,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case 4:{Y.startDate=D([21,9,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,12,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}}break}case R:{switch(Y.period){case 1:{Y.startDate=D([21,12,Y.year],"DD-MM-YYYY").subtract("1","year").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,6,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case 2:{Y.startDate=D([21,6,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,12,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}}break}case f:{Y.startDate=D([21,12,Y.year],"DD-MM-YYYY").subtract("1","years").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D([20,12,Y.year],"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}case c:{Y.startDate=D(Y.startDateParam,"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.startDate),Y.endDate=D(Y.endDateParam,"DD-MM-YYYY").format("YYYY-MM-DD"),console.log(Y.endDate);break}}return Y},getDDMMYYYFromJSDate(Y){return D(Y).format("DD-MM-YYYY")}};const u=l(M),d=M.entity;var k={async getDataLocalDb(Y){const e=g.determineStartEndDate(Y);console.log(e),(await s.localDbGetAll()).filter(n=>n.entrance.dateReceived>=e.startDate&&n.entrance.dateReceived<=e.endDate&&n.drug.clinicalService.id===e.clinicalService).forEach(n=>{const t=new M;t.reportId=e.id,t.year=e.year,t.startDate=e.startDate,t.endDate=e.endDate,t.orderNumber=n.entrance.orderNumber,t.drugName=n.drug.name,t.expiryDate=n.expireDate,t.dateReceived=n.entrance.dateReceived,t.unitsReceived=n.unitsReceived,t.manufacture=n.manufacture,t.batchNumber=n.batchNumber,t.id=i(),this.localDbAddOrUpdate(t),console.log(t)})},async localDbAddOrUpdate(Y){return o[d].add(JSON.parse(JSON.stringify(Y))).then(()=>{u.save(Y)}).catch(e=>{console.log(e)})},async localDbGetAllByReportId(Y){return await o[d].where("reportId").equalsIgnoreCase(Y).toArray()}};export{k as R,g as r};
