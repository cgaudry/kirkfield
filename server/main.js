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
	}

	if(Jobs.find().count() === 0) {
		Jobs.insert({
				invoice: 1,
				date: '01-01-2017',
				firstName: 'Billy',
				lastName: 'Bob',
				address: '69 Thorton Bay',
				phoneNumber: 2045559999,
				email: 'be@cool.ca',
				jobTypeCode: 'a',
				estimateCost: 1000.00,
				estimateParts: {},
				estimateEmployee: 1,
				installCost: 1500.69,
				installParts: {},
				installEmployee: 1,
				vehicleId: 'aaa123',
				mileage: 1234,
				complete: false,
				createdAt: new Date()
				
			});

		Jobs.insert({
				invoice: 2,
				date: '02-01-2017',
				firstName: 'Joe',
				lastName: 'Rogan',
				address: '123 Easy Street',
				phoneNumber: 2046668888,
				email: 'see@cool.ca',
				jobTypeCode: 'b',
				estimateCost: 1500.00,
				estimateParts: {},
				estimateEmployee: 2,
				installCost: 1600.25,
				installParts: {},
				installEmployee: 2,
				vehicleId: 'aaa123',
				mileage: 1234,
				complete: false,
				createdAt: new Date()
				
			});

		Jobs.insert({
				invoice: 3,
				date: '03-01-2017',
				firstName: 'Joe',
				lastName: 'Rogan',
				address: '123 Easy Street',
				phoneNumber: 2046668888,
				email: 'see@cool.ca',
				jobTypeCode: 'b',
				estimateCost: 500.00,
				estimateParts: {},
				estimateEmployee: 2,
				installCost: 620.50,
				installParts: {},
				installEmployee: 2,
				vehicleId: 'aaa123',
				mileage: 1234,
				complete: false,
				createdAt: new Date()
				
			});

		Jobs.insert({
				invoice: 4,
				date: '04-01-2017',
				firstName: 'Joe',
				lastName: 'Rogan',
				address: '123 Easy Street',
				phoneNumber: 2046668888,
				email: 'see@cool.ca',
				jobTypeCode: 'b',
				estimateCost: 700.00,
				estimateParts: {},
				estimateEmployee: 3,
				installCost: 909.50,
				installParts: {},
				installEmployee: 3,
				vehicleId: 'aaa123',
				mileage: 1234,
				complete: false,
				createdAt: new Date()
				
			});

		Jobs.insert({
				invoice: 5,
				date: '05-01-2017',
				firstName: 'Joe',
				lastName: 'Rogan',
				address: '123 Easy Street',
				phoneNumber: 2046668888,
				email: 'see@cool.ca',
				jobTypeCode: 'b',
				estimateCost: 9500.00,
				estimateParts: {},
				estimateEmployee: 4,
				installCost: 9909.50,
				installParts: {},
				installEmployee: 4,
				vehicleId: 'aaa123',
				mileage: 1234,
				complete: false,
				createdAt: new Date()
				
			});
	}

  
});
