using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString = "Data Source=BRIO-LT-HADI\\SQLEXPRESS;Initial Catalog=POWERWAVE;Integrated Security=True;Connection Timeout=90;";

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Connected to the database successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error connecting to the database: " + ex.Message);
            }
        }
    }
}
