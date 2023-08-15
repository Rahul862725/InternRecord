//package com.practiceproject
//
//import android.app.Activity
//import android.content.Intent
//import android.os.Bundle
//import android.view.View
//import android.widget.Button
//import android.widget.EditText
//
//class SignupPage : Activity() {
//    var Name="";
//    var Email="";
//    var Password="";
//    public override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.singup_main)
//        val name = findViewById<View>(R.id.name) as EditText
//        val email = findViewById<View>(R.id.email) as EditText
//        val password = findViewById<View>(R.id.password) as EditText
//        val obj = Intent(applicationContext, LoginPage::class.java)
//        val but = findViewById<View>(R.id.button) as Button
//        val but1 = findViewById<View>(R.id.button1) as Button
//        but.setOnClickListener { view: View? ->
//            //code
//            Name = name.text.toString()
//            val email = email.text.toString()
//            Email = email
//            println(email + "Email is" +  Email)
//            val pass = password.text.toString()
//             Password = pass
//            startActivity(obj)
//        }
//        but1.setOnClickListener { view: View? ->
//            startActivity(
//                obj
//            )
//        }
//    }
//
//
//}