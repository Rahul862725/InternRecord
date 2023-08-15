//package com.practiceproject
//
//import android.app.Activity
//import android.os.Bundle
//import android.view.View
//import android.widget.Button
//import android.widget.EditText
//import android.widget.Toast
//
//class LoginPage : Activity() {
//    var SignupPage =SignupPage()
//    public override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main)
//        val Email = findViewById<View>(R.id.email) as EditText
//        val Password = findViewById<View>(R.id.password) as EditText
//        val but = findViewById<View>(R.id.button) as Button
//        but.setOnClickListener { view: View? ->
//            //code
//            val email = Email.text.toString()
//            println(email)
//            val pass = Password.text.toString()
//
//            if (email == SignupPage.Email && pass == SignupPage.Password) {
//                Toast.makeText(applicationContext, "Login Successful!", Toast.LENGTH_LONG)
//                    .show()
//            } else {
//                Toast.makeText(applicationContext, "Unsuccessful!", Toast.LENGTH_LONG).show()
//            }
//        }
//    }
//}