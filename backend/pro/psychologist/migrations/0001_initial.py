# Generated by Django 5.0.7 on 2024-10-21 19:03

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Question",
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
                ("text", models.CharField(max_length=255)),
                ("question_number", models.PositiveIntegerField(unique=True)),
            ],
            options={
                "verbose_name": "Вопрос",
                "verbose_name_plural": "Вопросы",
                "ordering": ["question_number"],
            },
        ),
        migrations.CreateModel(
            name="Answer",
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
                ("text", models.CharField(max_length=255)),
                ("number", models.PositiveIntegerField()),
                (
                    "question",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="answers",
                        to="psychologist.question",
                    ),
                ),
            ],
            options={
                "verbose_name": "Ответ",
                "verbose_name_plural": "Ответы",
                "unique_together": {("question", "number")},
            },
        ),
        migrations.CreateModel(
            name="QuestionProgress",
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
                    "player",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Игрок",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="psychologist.question",
                        verbose_name="Вопрос",
                    ),
                ),
                (
                    "selected_answer",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="psychologist.answer",
                        verbose_name="Выбранный ответ",
                    ),
                ),
            ],
            options={
                "verbose_name": "Прогресс вопроса",
                "verbose_name_plural": "Прогресс вопросов",
            },
        ),
    ]