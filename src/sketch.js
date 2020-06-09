function setup() {
    createCanvas(7000, 1000);
    k=0;
    for (let i = 0; i < 4; i++){
        for (let j = i+1; j < 4; j++){

                init(100+k*1000, 800, i, j);k++;
        }
    }
    // init(100, 800, 0, 1);
    // init(1000, 800, 0, 2);
    // init(2000, 800, 0, 3);
    // init(100, 800, 1, 2);
    // init(100, 800, 1, 3);
    // init(100, 800, 2, 3);

}

function init(ox,oy,cl1, cl2) {

    file = '../iris.dat';
    data = fetch(file)
        .then(response => response.text());

    maxX = ox+800;
    minY = 10;

    textSize(32);
    //oxy
    line(ox, oy, ox, minY);
    line(ox, oy, maxX, oy);

    line(ox, minY, ox+10, minY+10);
    line(ox, minY, ox-10, minY+10);
    text("y", ox-50, minY+50);


    line(maxX, oy, maxX-10, oy-10);
    line(maxX, oy, maxX-10, oy+10);
    text("x", maxX, oy+50);

    text("O", ox, oy+50);
    text("iris "+cl1+cl2, maxX-400, oy+100);

    for (i = 1; i < 8; i++){
        line(ox-10, oy-i*100, ox+10, oy-i*100);
        text(i, ox-30, oy-i*100);
        line(ox+i*100, oy-10, ox+i*100, oy+10);
        text(i, ox+i*100, oy+40);

    }
    data
        .then(string => {
            while (string.indexOf("   ") != -1){
                string = string.replace("   ","  ")
            }

            arr = string.split("  ");
            arr.splice(arr.indexOf(""),1);
            arr.map(item => {
                item = parseInt(item);
            });
            // console.log(arr);
            for (i = 0; i < arr.length; i+=7){
                let c = color(arr[i+4]*200,arr[i+5]*200, arr[i+6]*200);

                fill(c);
                noStroke();
                circle(parseInt(ox+arr[i+cl1]*100), parseInt(oy-arr[i+cl2]*100), 10);
                // console.log(parseInt(maxX-arr[i]*100)," ", parseInt(oy-arr[i+1]*100), i);
            }
        });
}
