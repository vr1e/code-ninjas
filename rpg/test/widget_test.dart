// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:rpg/screens/home/home.dart';
import 'package:rpg/theme.dart';

void main() {
  testWidgets('Home screen shows title, characters and create button', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(
      MaterialApp(theme: primaryTheme, home: const Home()),
    );

    // Verify that the title is present.
    expect(find.text('Your Characters'), findsOneWidget);

    // Verify that at least one character is present.
    expect(find.text('mario'), findsOneWidget);

    // Verify that the "Create New" button is present.
    expect(find.text('CREATE NEW'), findsOneWidget);
  });
}
