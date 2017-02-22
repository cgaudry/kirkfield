import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if(Employees.find().count() === 0) {
  	Employees.insert({
		employeeId: 1,
		employeeName: 'Ted'
	});

	Employees.insert({
		employeeId: 2,
		employeeName: 'Eddie'
	});

	Employees.insert({
		employeeId: 3,
		employeeName: 'Bill'
	});

	Employees.insert({
		employeeId: 4,
		employeeName: 'John'
	});
	

	Employees.insert({
		employeeId: 5,
		employeeName: 'Tomas'
	});
	

	Employees.insert({
		employeeId: 6,
		employeeName: 'Bobby'
	});
	}

	if(Jobs.find().count() === 0) {
		let jobTypeArray = ['a', 'b', 'c'];
		let vehicleIdArray = ['aaa123', 'bbb234', 'ccc345', 'ddd456'];

		for (i = 1; i < 1000; i++) {
			let jobTypeRandom = Math.floor(Math.random() * 3);
			let monthRandom = Math.floor(Math.random() * 12);
			let dayRandom = Math.floor((Math.random() * 32) + 1);
			let estimateRandom = Math.random() * 10000;
			let costRandom = Math.max(100 , (estimateRandom + ((Math.random() * 1000) - 500)));
			let employeeRandom = (Math.random() * 6) + 1;
			let vehicleIdRandom = Math.floor(Math.random() * 4);
			let milageRandom = Math.floor((Math.random() * 50) + 1);

			Jobs.insert({
				invoice: i,
				date: new Date(2017, monthRandom, dayRandom),
				firstName: 'Billy',
				lastName: 'Bob',
				address: '69 Thorton Bay',
				phoneNumber: 2045559999,
				email: 'be@cool.ca',
				jobTypeCode: jobTypeArray[jobTypeRandom],
				estimateCost: estimateRandom,
				estimateParts: {},
				estimateEmployee: employeeRandom,
				installCost: costRandom,
				installParts: {},
				installEmployee: employeeRandom,
				vehicleId: vehicleIdArray[vehicleIdRandom],
				mileage: milageRandom,
				complete: false,
				createdAt: new Date()
				
			});

		}

		
	}

  
});
