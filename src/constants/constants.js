const loaderSchema = [
    {
        "name": "patientid",
        "displayName": "Patient Id",
        "width": 200,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "age",
        "displayName": "Age",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "WITH_META_LIST",
    },
    {
        "name": "phonenumber",
        "displayName": "Contact Number",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

const schema = [
    {
        name:'patientid',
        displayName:'Patient Id',
        width:200,
        resizable: true,
        sorting: false,
        cellType: 'WITH_META_LIST'
    },
    {
        name: 'name',
        displayName: 'Name',
        width: 300,
        resizable: true,
        separator: true,
        tooltip: true,
        sorting: false,
        cellType: 'WITH_META_LIST',
    },
    {
        name: 'age',
        displayName: 'Age',
        width: 350,
        resizable: true,
        sorting: false,
        cellType: 'WITH_META_LIST'
    },
    {
        name: 'gender',
        displayName: 'Gender',
        width: 200,
        resizable: true,
        cellType: 'WITH_META_LIST'
    },
    {
        name: 'phonenumber',
        displayName: 'Phone Number',
        width: 200,
        resizable: true,
        cellType: 'WITH_META_LIST'
    },
];

export {
    loaderSchema,
    schema
}