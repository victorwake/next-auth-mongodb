import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDb } from '@/lib/mongoodb'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
    await connectDb()
    const { email, password } = await request.json()
    console.log(email, password);
    try {
        //Valido que el password no llege vacio o sea menor a 8 caracteres
        if (!password) return NextResponse.json({
            message: 'Not Password'
        }, {
            status: 400
        })

        if (password.length < 8) return NextResponse.json({
            message: 'Password must be at least 8 characters'
        }, {
            status: 400
        })


        // Valido si ya hay un usuario registrado con ese email o el campo vacio
        if (!email) return NextResponse.json({
            message: 'Not email'
        }, {
            status: 400
        });


        const userFound = await User.findOne({ email })

        if (userFound) return NextResponse.json({
            message: 'Email already exists'
        }, {
            status: 400
        });

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({
            email,
            password: hashedPassword,
        })

        const savedUser = await user.save()
        console.log(savedUser)


        return NextResponse.json(savedUser);
    } catch (err) {
        console.log(err)
    }
}