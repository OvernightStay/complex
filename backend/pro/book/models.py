from django.db import models
from froala_editor.fields import FroalaField


class Book(models.Model):
    title = models.CharField(max_length=100, verbose_name="Глава")
    text = FroalaField(verbose_name="Текст")
    slug = models.SlugField(
        max_length=255,
        unique=True,
        db_index=True,
        verbose_name="URL",
        help_text="это поле заполняется автоматически",
    )
    date_add = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    date_update = models.DateTimeField(auto_now=True, verbose_name="Дата изменения")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Книга знаний"
        verbose_name_plural = "Книга знаний"
