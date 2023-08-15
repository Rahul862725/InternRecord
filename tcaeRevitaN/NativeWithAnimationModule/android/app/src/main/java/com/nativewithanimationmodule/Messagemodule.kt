package com.nativewithanimationmodule

import android.app.Activity
import android.content.Intent
import android.widget.Toast
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.facebook.react.bridge.Callback;
class Messagemodule(context:ReactApplicationContext): ReactContextBaseJavaModule(context) {
    var context1:ReactApplicationContext= context
    override fun getName(): String {
        return "MessageModule"
    }
    @ReactMethod
    fun getOnAndroid(messages:String){
        val obj1 = Intent(context1, Message::class.java)
        obj1.putExtra("message",messages)
        currentActivity!!.startActivity(obj1)
        Toast.makeText(context1,messages,Toast.LENGTH_LONG).show()
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
        reactContext.getJSModule(RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    private val activityEventListener =
        object : BaseActivityEventListener() {
            override fun onActivityResult(
                activity: Activity?,
                requestCode: Int,
                resultCode: Int,
                intent: Intent?
            ) {
                println("come")
                if(requestCode==111)
                {
                    val text= intent?.getStringExtra("message");
                    println(text+"find")
                    val params = Arguments.createMap().apply {
                        putString("message", text);
                    }
                    sendEvent(context1,"getUp",params)
                }
                }
            }


    init {
        context1.addActivityEventListener(activityEventListener)
    }

    @ReactMethod
    fun getRender()
    {
        val obj=Intent(context1,MessageToReact::class.java)
        context1.startActivityForResult(obj,111,null);
//        val params = Arguments.createMap().apply {
//            putString("message", "Hello to all!");
//        }
//        println("hello")
//        sendEvent(context1,"getUp",params)

//        Toast.makeText(context1,"hello",Toast.LENGTH_LONG).show()

    }


}