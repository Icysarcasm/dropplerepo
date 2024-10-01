gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDGreenBackgroundObjects1= [];
gdjs.ShopCode.GDGreenBackgroundObjects2= [];
gdjs.ShopCode.GDShopnameObjects1= [];
gdjs.ShopCode.GDShopnameObjects2= [];
gdjs.ShopCode.GDNewTiledSpriteObjects1= [];
gdjs.ShopCode.GDNewTiledSpriteObjects2= [];
gdjs.ShopCode.GDShopDescObjects1= [];
gdjs.ShopCode.GDShopDescObjects2= [];
gdjs.ShopCode.GDShopPriceObjects1= [];
gdjs.ShopCode.GDShopPriceObjects2= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.ShopCode.GDShopnamepegObjects1= [];
gdjs.ShopCode.GDShopnamepegObjects2= [];
gdjs.ShopCode.GDShopDescpegObjects1= [];
gdjs.ShopCode.GDShopDescpegObjects2= [];
gdjs.ShopCode.GDpegbuttonObjects1= [];
gdjs.ShopCode.GDpegbuttonObjects2= [];
gdjs.ShopCode.GDpegpriceObjects1= [];
gdjs.ShopCode.GDpegpriceObjects2= [];
gdjs.ShopCode.GDBucketbuttonObjects1= [];
gdjs.ShopCode.GDBucketbuttonObjects2= [];
gdjs.ShopCode.GDShopDescBucketObjects1= [];
gdjs.ShopCode.GDShopDescBucketObjects2= [];
gdjs.ShopCode.GDShopPriceBucketObjects1= [];
gdjs.ShopCode.GDShopPriceBucketObjects2= [];
gdjs.ShopCode.GDShopnamebucketObjects1= [];
gdjs.ShopCode.GDShopnamebucketObjects2= [];
gdjs.ShopCode.GDNewTextObjects1= [];
gdjs.ShopCode.GDNewTextObjects2= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];
gdjs.ShopCode.GDShatterpegUIObjects1= [];
gdjs.ShopCode.GDShatterpegUIObjects2= [];
gdjs.ShopCode.GDballUIObjects1= [];
gdjs.ShopCode.GDballUIObjects2= [];
gdjs.ShopCode.GDDropPegUIObjects1= [];
gdjs.ShopCode.GDDropPegUIObjects2= [];
gdjs.ShopCode.GDBigPegGUIObjects1= [];
gdjs.ShopCode.GDBigPegGUIObjects2= [];
gdjs.ShopCode.GDPegspitterguiObjects1= [];
gdjs.ShopCode.GDPegspitterguiObjects2= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDShopDescObjects1 */
/* Reuse gdjs.ShopCode.GDShopPriceObjects1 */
/* Reuse gdjs.ShopCode.GDShopnameObjects1 */
/* Reuse gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(15);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}{for(var i = 0, len = gdjs.ShopCode.GDShopnameObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescObjects1[i].hide();
}
}}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 14;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Spend 15 Cash?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDesc"), gdjs.ShopCode.GDShopDescObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopPrice"), gdjs.ShopCode.GDShopPriceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopname"), gdjs.ShopCode.GDShopnameObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnameObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnameObjects1[i].getBehavior("Text").setText("Respawning Pegs");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescObjects1[i].getBehavior("Text").setText("Allows Pegs to Respawn");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceObjects1[i].getBehavior("Text").setText("15");
}
}
{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDShopDescpegObjects1 */
/* Reuse gdjs.ShopCode.GDShopnamepegObjects1 */
/* Reuse gdjs.ShopCode.GDpegbuttonObjects1 */
/* Reuse gdjs.ShopCode.GDpegpriceObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(50);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{for(var i = 0, len = gdjs.ShopCode.GDpegpriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDpegpriceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescpegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescpegObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopnamepegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamepegObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDpegbuttonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDpegbuttonObjects1[i].hide();
}
}}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pegbutton"), gdjs.ShopCode.GDpegbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDpegbuttonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDpegbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDpegbuttonObjects1[k] = gdjs.ShopCode.GDpegbuttonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDpegbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 49;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Spend 50 Cash?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ShopCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDescpeg"), gdjs.ShopCode.GDShopDescpegObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopnamepeg"), gdjs.ShopCode.GDShopnamepegObjects1);
gdjs.copyArray(runtimeScene.getObjects("pegprice"), gdjs.ShopCode.GDpegpriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnamepegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamepegObjects1[i].getBehavior("Text").setText("Closet Key");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescpegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescpegObjects1[i].getBehavior("Text").setText("Unlocks Equipment");
}
}{for(var i = 0, len = gdjs.ShopCode.GDpegpriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDpegpriceObjects1[i].getBehavior("Text").setText("50");
}
}
{ //Subevents
gdjs.ShopCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(100);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1.5);
}}

}


};gdjs.ShopCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bucketbutton"), gdjs.ShopCode.GDBucketbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBucketbuttonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBucketbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBucketbuttonObjects1[k] = gdjs.ShopCode.GDBucketbuttonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBucketbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 99;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Spend 100 Cash?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ShopCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDescBucket"), gdjs.ShopCode.GDShopDescBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopPriceBucket"), gdjs.ShopCode.GDShopPriceBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopnamebucket"), gdjs.ShopCode.GDShopnamebucketObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnamebucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamebucketObjects1[i].getBehavior("Text").setText("Better Buckets");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescBucketObjects1[i].getBehavior("Text").setText("Increases Bucket Multipliers");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceBucketObjects1[i].getBehavior("Text").setText("100");
}
}
{ //Subevents
gdjs.ShopCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(500);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2.5);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1.5);
}}

}


};gdjs.ShopCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bucketbutton"), gdjs.ShopCode.GDBucketbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBucketbuttonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBucketbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBucketbuttonObjects1[k] = gdjs.ShopCode.GDBucketbuttonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBucketbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 499;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Spend 500 Cash?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ShopCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDescBucket"), gdjs.ShopCode.GDShopDescBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopPriceBucket"), gdjs.ShopCode.GDShopPriceBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopnamebucket"), gdjs.ShopCode.GDShopnamebucketObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnamebucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamebucketObjects1[i].getBehavior("Text").setText("Better Buckets II");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescBucketObjects1[i].getBehavior("Text").setText("Increases Bucket Multipliers");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceBucketObjects1[i].getBehavior("Text").setText("500");
}
}
{ //Subevents
gdjs.ShopCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1500);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2.5);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}}

}


};gdjs.ShopCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bucketbutton"), gdjs.ShopCode.GDBucketbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBucketbuttonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBucketbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBucketbuttonObjects1[k] = gdjs.ShopCode.GDBucketbuttonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBucketbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 1499;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Spend 1500 Cash?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.ShopCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 2.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDescBucket"), gdjs.ShopCode.GDShopDescBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopPriceBucket"), gdjs.ShopCode.GDShopPriceBucketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopnamebucket"), gdjs.ShopCode.GDShopnamebucketObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnamebucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamebucketObjects1[i].getBehavior("Text").setText("Better Buckets III");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescBucketObjects1[i].getBehavior("Text").setText("Increases Bucket Multipliers");
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceBucketObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceBucketObjects1[i].getBehavior("Text").setText("1500");
}
}
{ //Subevents
gdjs.ShopCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenBackground"), gdjs.ShopCode.GDGreenBackgroundObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDGreenBackgroundObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGreenBackgroundObjects1[i].rotate(3, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Equipment");
}}

}


{


gdjs.ShopCode.eventsList2(runtimeScene);
}


{


gdjs.ShopCode.eventsList5(runtimeScene);
}


{


gdjs.ShopCode.eventsList8(runtimeScene);
}


{


gdjs.ShopCode.eventsList11(runtimeScene);
}


{


gdjs.ShopCode.eventsList14(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDesc"), gdjs.ShopCode.GDShopDescObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopPrice"), gdjs.ShopCode.GDShopPriceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopname"), gdjs.ShopCode.GDShopnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopnameObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopDescObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopPriceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopDescpeg"), gdjs.ShopCode.GDShopDescpegObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shopnamepeg"), gdjs.ShopCode.GDShopnamepegObjects1);
gdjs.copyArray(runtimeScene.getObjects("pegbutton"), gdjs.ShopCode.GDpegbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("pegprice"), gdjs.ShopCode.GDpegpriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopDescpegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopDescpegObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopnamepegObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopnamepegObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDpegbuttonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDpegbuttonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDpegpriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDpegpriceObjects1[i].hide();
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDGreenBackgroundObjects1.length = 0;
gdjs.ShopCode.GDGreenBackgroundObjects2.length = 0;
gdjs.ShopCode.GDShopnameObjects1.length = 0;
gdjs.ShopCode.GDShopnameObjects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDShopDescObjects1.length = 0;
gdjs.ShopCode.GDShopDescObjects2.length = 0;
gdjs.ShopCode.GDShopPriceObjects1.length = 0;
gdjs.ShopCode.GDShopPriceObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.ShopCode.GDShopnamepegObjects1.length = 0;
gdjs.ShopCode.GDShopnamepegObjects2.length = 0;
gdjs.ShopCode.GDShopDescpegObjects1.length = 0;
gdjs.ShopCode.GDShopDescpegObjects2.length = 0;
gdjs.ShopCode.GDpegbuttonObjects1.length = 0;
gdjs.ShopCode.GDpegbuttonObjects2.length = 0;
gdjs.ShopCode.GDpegpriceObjects1.length = 0;
gdjs.ShopCode.GDpegpriceObjects2.length = 0;
gdjs.ShopCode.GDBucketbuttonObjects1.length = 0;
gdjs.ShopCode.GDBucketbuttonObjects2.length = 0;
gdjs.ShopCode.GDShopDescBucketObjects1.length = 0;
gdjs.ShopCode.GDShopDescBucketObjects2.length = 0;
gdjs.ShopCode.GDShopPriceBucketObjects1.length = 0;
gdjs.ShopCode.GDShopPriceBucketObjects2.length = 0;
gdjs.ShopCode.GDShopnamebucketObjects1.length = 0;
gdjs.ShopCode.GDShopnamebucketObjects2.length = 0;
gdjs.ShopCode.GDNewTextObjects1.length = 0;
gdjs.ShopCode.GDNewTextObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.ShopCode.GDShatterpegUIObjects1.length = 0;
gdjs.ShopCode.GDShatterpegUIObjects2.length = 0;
gdjs.ShopCode.GDballUIObjects1.length = 0;
gdjs.ShopCode.GDballUIObjects2.length = 0;
gdjs.ShopCode.GDDropPegUIObjects1.length = 0;
gdjs.ShopCode.GDDropPegUIObjects2.length = 0;
gdjs.ShopCode.GDBigPegGUIObjects1.length = 0;
gdjs.ShopCode.GDBigPegGUIObjects2.length = 0;
gdjs.ShopCode.GDPegspitterguiObjects1.length = 0;
gdjs.ShopCode.GDPegspitterguiObjects2.length = 0;

gdjs.ShopCode.eventsList15(runtimeScene);
gdjs.ShopCode.GDGreenBackgroundObjects1.length = 0;
gdjs.ShopCode.GDGreenBackgroundObjects2.length = 0;
gdjs.ShopCode.GDShopnameObjects1.length = 0;
gdjs.ShopCode.GDShopnameObjects2.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ShopCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ShopCode.GDShopDescObjects1.length = 0;
gdjs.ShopCode.GDShopDescObjects2.length = 0;
gdjs.ShopCode.GDShopPriceObjects1.length = 0;
gdjs.ShopCode.GDShopPriceObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.ShopCode.GDShopnamepegObjects1.length = 0;
gdjs.ShopCode.GDShopnamepegObjects2.length = 0;
gdjs.ShopCode.GDShopDescpegObjects1.length = 0;
gdjs.ShopCode.GDShopDescpegObjects2.length = 0;
gdjs.ShopCode.GDpegbuttonObjects1.length = 0;
gdjs.ShopCode.GDpegbuttonObjects2.length = 0;
gdjs.ShopCode.GDpegpriceObjects1.length = 0;
gdjs.ShopCode.GDpegpriceObjects2.length = 0;
gdjs.ShopCode.GDBucketbuttonObjects1.length = 0;
gdjs.ShopCode.GDBucketbuttonObjects2.length = 0;
gdjs.ShopCode.GDShopDescBucketObjects1.length = 0;
gdjs.ShopCode.GDShopDescBucketObjects2.length = 0;
gdjs.ShopCode.GDShopPriceBucketObjects1.length = 0;
gdjs.ShopCode.GDShopPriceBucketObjects2.length = 0;
gdjs.ShopCode.GDShopnamebucketObjects1.length = 0;
gdjs.ShopCode.GDShopnamebucketObjects2.length = 0;
gdjs.ShopCode.GDNewTextObjects1.length = 0;
gdjs.ShopCode.GDNewTextObjects2.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.ShopCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.ShopCode.GDShatterpegUIObjects1.length = 0;
gdjs.ShopCode.GDShatterpegUIObjects2.length = 0;
gdjs.ShopCode.GDballUIObjects1.length = 0;
gdjs.ShopCode.GDballUIObjects2.length = 0;
gdjs.ShopCode.GDDropPegUIObjects1.length = 0;
gdjs.ShopCode.GDDropPegUIObjects2.length = 0;
gdjs.ShopCode.GDBigPegGUIObjects1.length = 0;
gdjs.ShopCode.GDBigPegGUIObjects2.length = 0;
gdjs.ShopCode.GDPegspitterguiObjects1.length = 0;
gdjs.ShopCode.GDPegspitterguiObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
