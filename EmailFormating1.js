function formatDataType1(data) {
    const name = `${data[0][0]}`;
    const birthday = new Date(data[0][1]).toLocaleDateString();

    const firstEmail = data[1][2] || '';
    const firstEmailName = data[1][3] || '';
    
    const firstEmail_v2 = firstEmail.split('(')[0];

    const student = new Student(name, birthday, firstEmail_v2, firstEmailName);
    
    return student;
}
function formatDataType2(data) {
    const name = `${data[0][0]}`;
    const birthday = new Date(data[0][1]).toLocaleDateString();

    const firstEmail = data[1][2] || '';
    const firstEmailName = data[1][3] || '';
    const secondEmail = data[2][2] || '';
    const secondEmailName = data[2][3] || '';

    const firstEmail_v2 = firstEmail.split('(')[0];
    const secondEmail_v2 = secondEmail.split('(')[0];
    const firstEmailName_v2 = firstEmailName.split('(')[0];
    const secondEmailName_v2 = secondEmailName.split('(')[0];

    const student = new Student(name, birthday, firstEmail_v2,  firstEmailName_v2, secondEmail_v2,secondEmailName_v2 );
    
    return student;
}

function formatDataType3(data) {
    const name = `${data[0][0]}`;
    const birthday = new Date(data[0][1]).toLocaleDateString();

    const firstEmail = data[1][2] || '';
    const firstEmailName = data[1][3] || '';
    const secondEmail = data[2][2] || '';
    const secondEmailName = data[2][3] || '';
    const thirdEmail = data[3][2] || '';
    const thirdEmailName = data[3][3] || '';


    const firstEmail_v2 = firstEmail.split('(')[0];
    const secondEmail_v2 = secondEmail.split('(')[0];
    const firstEmailName_v2 = firstEmailName.split('(')[0];
    const secondEmailName_v2 = secondEmailName.split('(')[0];
    const thirdEmail_v2 = thirdEmail.split('(')[0];
    const thirdEmailName_V2 = thirdEmailName.split('(')[0]; 


    const student = new Student(name, birthday, firstEmail_v2,  firstEmailName_v2, secondEmail_v2,secondEmailName_v2, thirdEmail_v2, thirdEmailName_V2);
    
    return student;
}

function formatDataType4(data) {
    const name = `${data[0][0]}`;
    const birthday = new Date(data[0][1]).toLocaleDateString();

    const firstEmail = data[1][2] || '';
    const firstEmailName = data[1][3] || '';
    const secondEmail = data[2][2] || '';
    const secondEmailName = data[2][3] || '';
    const thirdEmail = data[3][2] || '';
    const thirdEmailName = data[3][3] || '';
    const fourEmail = data[4][2] || '';
    const fourEmailName = data[4][3] || '';

    const firstEmail_v2 = firstEmail.split('(')[0];
    const secondEmail_v2 = secondEmail.split('(')[0];
    const firstEmailName_v2 = firstEmailName.split('(')[0];
    const secondEmailName_v2 = secondEmailName.split('(')[0];
    const thirdEmail_v2 = thirdEmail.split('(')[0];
    const thirdEmailName_V2 = thirdEmailName.split('(')[0]; 
    const fourEmail_v2 = fourEmail.split('(')[0];
    const fourEmailName_v2 = fourEmailName.split('(')[0];

    const student = new Student(name, birthday, firstEmail_v2,  firstEmailName_v2, secondEmail_v2,secondEmailName_v2,
                                thirdEmail_v2, thirdEmailName_V2, fourEmail_v2, fourEmailName_v2);
    
    return student;
}
