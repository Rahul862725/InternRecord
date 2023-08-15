//package com.kotlineSampleProject
//
//import com.facebook.react.ReactActivity
//import com.facebook.react.ReactActivityDelegate
//import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.concurrentReactEnabled
//import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
//import com.facebook.react.defaults.DefaultReactActivityDelegate
//
//class MainActivity: ReactActivity() {
//
//    override fun getMainComponentName():String
//    {
//        return "kotlineSampleProject";
//    }
//    override fun createReactActivityDelegate(): ReactActivityDelegate {
//        return DefaultReactActivityDelegate(
//            this,
//            mainComponentName,  // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//            fabricEnabled,  // fabricEnabled
//            // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
//            concurrentReactEnabled // concurrentRootEnabled
//        )
//    }
//}