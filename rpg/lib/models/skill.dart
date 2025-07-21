import 'package:rpg/models/vocation.dart';

class Skill {
  final String id;
  final String name;
  final String image;
  final Vocation vocation;

  Skill({
    required this.id,
    required this.name,
    required this.image,
    required this.vocation,
  });
}

final List<Skill> allSkills = [
  // algo wizard skills
  Skill(
    id: '1',
    name: 'Brute Force Bolt',
    image: 'bf_bolt.webp',
    vocation: Vocation.wizard,
  ),
  Skill(
    id: '2',
    name: 'Recursive Wave',
    image: 'r_wave.webp',
    vocation: Vocation.wizard,
  ),
  Skill(
    id: '3',
    name: 'Hash Beam',
    image: 'h_beam.webp',
    vocation: Vocation.wizard,
  ),
  Skill(
    id: '4',
    name: 'Backtrack',
    image: 'backtrack.webp',
    vocation: Vocation.wizard,
  ),

  // terminal raider skills
  Skill(
    id: '5',
    name: 'Lethal Touch',
    image: 'l_touch.webp',
    vocation: Vocation.raider,
  ),
  Skill(
    id: '6',
    name: 'Sudo Blast',
    image: 's_blast.webp',
    vocation: Vocation.raider,
  ),
  Skill(
    id: '7',
    name: 'Full Clear',
    image: 'f_clear.webp',
    vocation: Vocation.raider,
  ),
  Skill(
    id: '8',
    name: 'Support Shell',
    image: 's_shell.webp',
    vocation: Vocation.raider,
  ),

  // code junkie skills
  Skill(
    id: '9',
    name: 'Infinite Loop',
    image: 'i_loop.webp',
    vocation: Vocation.junkie,
  ),
  Skill(
    id: '10',
    name: 'Type Cast',
    image: 't_cast.webp',
    vocation: Vocation.junkie,
  ),
  Skill(
    id: '11',
    name: 'Encapsulate',
    image: 'encapsulate.webp',
    vocation: Vocation.junkie,
  ),
  Skill(
    id: '12',
    name: 'Copy & Paste',
    image: 'c_paste.webp',
    vocation: Vocation.junkie,
  ),

  // ux ninja skills
  Skill(
    id: '13',
    name: 'Gamify',
    image: 'gamify.webp',
    vocation: Vocation.ninja,
  ),
  Skill(
    id: '14',
    name: 'Heat Map',
    image: 'h_map.webp',
    vocation: Vocation.ninja,
  ),
  Skill(
    id: '15',
    name: 'Wireframe',
    image: 'wireframe.webp',
    vocation: Vocation.ninja,
  ),
  Skill(
    id: '16',
    name: 'Dark Pattern',
    image: 'd_pattern.webp',
    vocation: Vocation.ninja,
  ),
];
