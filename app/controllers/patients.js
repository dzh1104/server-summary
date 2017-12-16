const {
    ApiError
} = require('../error/index');

module.exports = {
    'post /patients': async (ctx, next) => {
        const body = ctx.getReqData();
        const username = body.username;
        const patient = body.patient;
        if (!username) {
            throw new ApiError(3000);
        }

        const User = require('../models/User');
        const Patient = require('../models/Patient');
        await User.findOne({
            username
        }).then(userInfo => {
            if (!userInfo) {
                throw new ApiError(1003);
            }
            Patient.findOne({
                name: patient.name
            }).then(patientInfo => {
                if (patientInfo) {
                    throw new ApiError(3001);
                }
                const newPatient = new Patient({
                    name: patient.name,
                    age: patient.age,
                    disease: patient.disease,
                    discoveryTime: patient.discoveryTime,
                    genderCode: patient.genderCode,
                    weight: patient.weight,
                    height: patient.height,
                    remark: patient.remark,
                    mobile: patient.mobile
                });
                console.log('newPatient', newPatient);
                let newPatientInfo = newPatient.save();
                return newPatientInfo;
            }).then(newPatientInfo => {
                if (newPatientInfo) {
                    ctx.rest({
                        message: '创建患者成功'
                    })
                }
            })
        })
    }
};