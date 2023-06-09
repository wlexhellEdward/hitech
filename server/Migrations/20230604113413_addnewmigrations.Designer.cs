﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    [DbContext(typeof(EF_DataContext))]
    [Migration("20230604113413_addnewmigrations")]
    partial class addnewmigrations
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseSerialColumns(modelBuilder);

            modelBuilder.Entity("Products", b =>
                {
                    b.Property<int?>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseSerialColumn(b.Property<int?>("id"));

                    b.Property<string>("back")
                        .HasColumnType("text")
                        .HasColumnName("back");

                    b.Property<string>("camera")
                        .HasColumnType("text")
                        .HasColumnName("camera");

                    b.Property<int?>("count")
                        .HasColumnType("integer")
                        .HasColumnName("count");

                    b.Property<int?>("countReview")
                        .IsRequired()
                        .HasColumnType("integer")
                        .HasColumnName("countReview");

                    b.Property<bool?>("favorite")
                        .HasColumnType("boolean")
                        .HasColumnName("favorite");

                    b.Property<string>("font")
                        .HasColumnType("text")
                        .HasColumnName("font");

                    b.Property<string>("leftImage")
                        .HasColumnType("text")
                        .HasColumnName("leftImage");

                    b.Property<string>("name")
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.Property<double?>("price")
                        .HasColumnType("double precision")
                        .HasColumnName("price");

                    b.Property<double?>("rating")
                        .HasColumnType("double precision")
                        .HasColumnName("rating");

                    b.Property<string>("type")
                        .HasColumnType("text")
                        .HasColumnName("type");

                    b.HasKey("id");

                    b.ToTable("products");
                });
#pragma warning restore 612, 618
        }
    }
}
