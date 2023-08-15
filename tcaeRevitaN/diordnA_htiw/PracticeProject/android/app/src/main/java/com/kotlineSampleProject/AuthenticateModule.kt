//package com.practiceproject
//
//import android.content.Intent
//import com.facebook.react.bridge.ReactApplicationContext
//import com.facebook.react.bridge.ReactContextBaseJavaModule
//import com.facebook.react.bridge.ReactMethod
//
//class AuthenticateModule internal constructor(private var context: ReactApplicationContext) :
//    ReactContextBaseJavaModule(context) {
//    override fun getName(): String {
//        return "LoginPage"
//    }
//
//    @ReactMethod
//    fun renderLogin1() {
//        val obj1 = Intent( context, SignupPage::class.java)
//        currentActivity!!.startActivity(obj1)
//    }
//
//    companion object
//}