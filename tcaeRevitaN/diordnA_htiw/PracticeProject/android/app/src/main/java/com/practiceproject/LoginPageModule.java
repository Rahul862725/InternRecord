package com.practiceproject;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LoginPageModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext context;
    LoginPageModule(ReactApplicationContext reactContext)
    {
        super(reactContext);
        context=reactContext;
    }
    @NonNull
    @Override
    public String getName() {
        return "LoginPage";
    }
    
    @ReactMethod
    public void renderLogin()
    {
        Intent obj1=new Intent(context,SignupPage.class);
        getCurrentActivity().startActivity(obj1);
    }
}
