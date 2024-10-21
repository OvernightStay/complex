# Generated by Django 5.0.7 on 2024-10-21 19:03

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="EmployeeGame",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(max_length=100, verbose_name="Игра сотрудником"),
                ),
            ],
            options={
                "verbose_name": "Игра сотрудником",
                "verbose_name_plural": "Игра сотрудником",
            },
        ),
        migrations.CreateModel(
            name="MiniGame",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(max_length=100, verbose_name="Название игры"),
                ),
            ],
            options={
                "verbose_name": "Мини-игра",
                "verbose_name_plural": "Мини-игры",
            },
        ),
        migrations.CreateModel(
            name="MiniNovella",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(max_length=100, verbose_name="Название новеллы"),
                ),
            ],
            options={
                "verbose_name": "Мини-новелла",
                "verbose_name_plural": "Мини-новеллы",
            },
        ),
        migrations.CreateModel(
            name="Reward",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(max_length=100, verbose_name="Название подарка"),
                ),
            ],
            options={
                "verbose_name": "Подарок",
                "verbose_name_plural": "Подарки",
            },
        ),
        migrations.CreateModel(
            name="PlayerProgress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "experience_gained",
                    models.PositiveIntegerField(
                        default=0, verbose_name="Полученный опыт"
                    ),
                ),
                (
                    "completion_time",
                    models.DateTimeField(
                        default=django.utils.timezone.now,
                        verbose_name="Время завершения",
                    ),
                ),
                (
                    "player",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="progress",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Игрок",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс игрока",
                "verbose_name_plural": "Прогресс игроков",
            },
        ),
        migrations.CreateModel(
            name="PlayerNovellaProgress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "novella",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mini_location_app.mininovella",
                        verbose_name="Мини-новелла",
                    ),
                ),
                (
                    "player_progress",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="novella_progress",
                        to="mini_location_app.playerprogress",
                        verbose_name="Прогресс игрока",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс игрока по новелле",
                "verbose_name_plural": "Прогресс игрока по новеллам",
            },
        ),
        migrations.CreateModel(
            name="PlayerGameProgress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "game",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mini_location_app.minigame",
                        verbose_name="Мини-игра",
                    ),
                ),
                (
                    "player_progress",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="game_progress",
                        to="mini_location_app.playerprogress",
                        verbose_name="Прогресс игрока",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс игрока по игре",
                "verbose_name_plural": "Прогресс игрока по играм",
            },
        ),
        migrations.CreateModel(
            name="PlayerEmployeeGameProgress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "employee_game",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mini_location_app.employeegame",
                        verbose_name="Игра сотрудником",
                    ),
                ),
                (
                    "player_progress",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="employee_game_progress",
                        to="mini_location_app.playerprogress",
                        verbose_name="Прогресс игрока",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс игрока по игре сотрудником",
                "verbose_name_plural": "Прогресс игрока по играм сотрудниками",
            },
        ),
        migrations.CreateModel(
            name="PlayerRewardProgress",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "player_progress",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="reward_progress",
                        to="mini_location_app.playerprogress",
                        verbose_name="Прогресс игрока",
                    ),
                ),
                (
                    "reward",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="mini_location_app.reward",
                        verbose_name="Подарок",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс игрока по подаркам",
                "verbose_name_plural": "Прогресс игрока по подаркам",
            },
        ),
    ]
