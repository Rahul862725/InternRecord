package com.sampleanimated1; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.widget.Toast; 
import android.util.Log;

public class Sample extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;
   Sample(ReactApplicationContext context) {
       super(context);
       reactContext=context;
   }

   // add to CalendarModule.java
@Override
public String getName() {
   return "Sample";
}

@ReactMethod
public void createCalendarEvent(String name, int duration) {
    System.out.println("Hello "+name+" in your "+duration);
    // Log.d("Hello bacho! "+name);
    
    Toast.makeText(getReactApplicationContext(),name,duration).show();
}
}