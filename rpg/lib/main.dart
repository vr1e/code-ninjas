import 'package:flutter/material.dart';
import 'package:rpg/screens/home/home.dart';
import 'package:rpg/theme.dart';

void main() {
  runApp(MaterialApp(theme: primaryTheme, home: const Home()));
}

class Sandbox extends StatelessWidget {
  const Sandbox({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sandbox'),
        backgroundColor: Colors.grey,
      ),
      body: Container(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Text('Character List'),
            FilledButton(onPressed: () {}, child: const Text('Create New')),
          ],
        ),
      ),
    );
  }
}
